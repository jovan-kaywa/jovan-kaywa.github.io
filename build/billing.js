

var Billing = React.createClass({displayName: "Billing",
  getInitialState: function() {
    return {
      submitted: null
    }
  }

, render: function() {
    var submitted
    if (this.state.submitted !== null) {
      submitted = React.createElement("div", {className: "alert alert-success"}, 
        React.createElement("p", null, "Billing data:"), 
        React.createElement("pre", null, React.createElement("code", null, JSON.stringify(this.state.submitted, null, '  ')))
      )
    }

    return React.createElement("div", null, 
      React.createElement("div", {className: "panel panel-default"}, 
        React.createElement("div", {className: "panel-heading clearfix"}, 
          React.createElement("h3", {className: "panel-title pull-left"}, "Billing example")
        ), 
        React.createElement("div", {className: "panel-body"}, 
          React.createElement(ContactForm, {ref: "contactForm"}
          )
        )

      ), 
      submitted
    )
  }

, handleChange: function(field, e) {
    var nextState = {}
    nextState[field] = e.target.checked
    this.setState(nextState)
  }

, handleSubmit: function() {
    if (this.refs.contactForm.isValid()) {
      this.setState({submitted: this.refs.contactForm.getFormData()})
    }
  }
})

/**
 * A contact form with certain optional fields.
 */
var ContactForm = React.createClass({displayName: "ContactForm",
  getDefaultProps: function() {
    return {
    }
  }

, getInitialState: function() {
    return {errors: {}}
  }

, isValid: function() {
    var fields = ['number', 'cvc', 'expMonth', 'expYear']

    var errors = {}
    fields.forEach(function(field) {
      var value = trim(this.refs[field].getDOMNode().value)
      if (!value) {
        errors[field] = 'This field is required'
      }
    }.bind(this))
    this.setState({errors: errors})

    var isValid = true
    for (var error in errors) {
      isValid = false
      break
    }
    return isValid
  }

, getFormData: function() {
    var data = {
      number: this.refs.number.getDOMNode().value
    , cvc: this.refs.cvc.getDOMNode().value
    , expMonth: this.refs.exp-month.getDOMNode().value
    , expYear: this.refs.exp-year.getDOMNode().value
    }
    return data
  }

, render: function() {
    return React.createElement("div", {className: "form-horizontal"}, 
      React.createElement("form", {action: "payment.php", method: "POST", id: "payment-form"}, 
       React.createElement("span", {class: "payment-errors"}), 
      this.renderTextInput('number', 'CC number'), 
      this.renderTextInput('cvc', 'CVC'), 
      this.renderTextInput('expMonth', 'Exp month'), 
      this.renderTextInput('expYear', 'Exp year'), 
              React.createElement("div", {className: "panel-footer"}, 
          React.createElement("button", {type: "submit", className: "btn btn-primary btn-block", onClick: this.handleSubmit}, "Submit")
        )
      )
    )
  }

, renderTextInput: function(id, label) {
    return this.renderField(id, label,
      React.createElement("input", {type: "number", className: "form-control", "data-stripe": id, ref: id})
    )
  }

, renderTextarea: function(id, label) {
    return this.renderField(id, label,
      React.createElement("textarea", {className: "form-control", id: id, ref: id})
    )
  }

, renderSelect: function(id, label, values) {
    var options = values.map(function(value) {
      return React.createElement("option", {value: value}, value)
    })
    return this.renderField(id, label,
      React.createElement("select", {className: "form-control", id: id, ref: id}, 
        options
      )
    )
  }

, renderRadioInlines: function(id, label, kwargs) {
    var radios = kwargs.values.map(function(value) {
      var defaultChecked = (value == kwargs.defaultCheckedValue)
      return React.createElement("label", {className: "radio-inline"}, 
        React.createElement("input", {type: "radio", ref: id + value, name: id, value: value, defaultChecked: defaultChecked}), 
        value
      )
    })
    return this.renderField(id, label, radios)
  }

, renderField: function(id, label, field) {
    return React.createElement("div", {className: $c('form-group', {'has-error': id in this.state.errors})}, 
      React.createElement("label", {htmlFor: id, className: "col-sm-4 control-label"}, label), 
      React.createElement("div", {className: "col-sm-6"}, 
        field
      )
    )
  }
})

React.render(React.createElement(Billing, null), document.getElementById('billing'))

// Utils

var trim = function() {
  var TRIM_RE = /^\s+|\s+$/g
  return function trim(string) {
    return string.replace(TRIM_RE, '')
  }
}()

function $c(staticClassName, conditionalClassNames) {
  var classNames = []
  if (typeof conditionalClassNames == 'undefined') {
    conditionalClassNames = staticClassName
  }
  else {
    classNames.push(staticClassName)
  }
  for (var className in conditionalClassNames) {
    if (!!conditionalClassNames[className]) {
      classNames.push(className)
    }
  }
  return classNames.join(' ')
}
