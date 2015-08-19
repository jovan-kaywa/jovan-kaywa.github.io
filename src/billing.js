

var Billing = React.createClass({
  getInitialState: function() {
    return {
      submitted: null
    }
  }

, render: function() {
    var submitted
    if (this.state.submitted !== null) {
      submitted = <div className="alert alert-success">
        <p>Billing data:</p>
        <pre><code>{JSON.stringify(this.state.submitted, null, '  ')}</code></pre>
      </div>
    }

    return <div>
      <div className="panel panel-default">
        <div className="panel-heading clearfix">
          <h3 className="panel-title pull-left">Billing example</h3>
        </div>
        <div className="panel-body">
          <ContactForm ref="contactForm"
          />
        </div>

      </div>
      {submitted}
    </div>
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
var ContactForm = React.createClass({
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
    return <div className="form-horizontal">
      <form action="payment.php" method="POST" id="payment-form">
       <span class="payment-errors"></span>
      {this.renderTextInput('number', 'CC number')}
      {this.renderTextInput('cvc', 'CVC')}
      {this.renderTextInput('expMonth', 'Exp month')}
      {this.renderTextInput('expYear', 'Exp year')}
              <div className="panel-footer">
          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  }

, renderTextInput: function(id, label) {
    return this.renderField(id, label,
      <input type="number" className="form-control" data-stripe={id} ref={id}/>
    )
  }

, renderTextarea: function(id, label) {
    return this.renderField(id, label,
      <textarea className="form-control" id={id} ref={id}/>
    )
  }

, renderSelect: function(id, label, values) {
    var options = values.map(function(value) {
      return <option value={value}>{value}</option>
    })
    return this.renderField(id, label,
      <select className="form-control" id={id} ref={id}>
        {options}
      </select>
    )
  }

, renderRadioInlines: function(id, label, kwargs) {
    var radios = kwargs.values.map(function(value) {
      var defaultChecked = (value == kwargs.defaultCheckedValue)
      return <label className="radio-inline">
        <input type="radio" ref={id + value} name={id} value={value} defaultChecked={defaultChecked}/>
        {value}
      </label>
    })
    return this.renderField(id, label, radios)
  }

, renderField: function(id, label, field) {
    return <div className={$c('form-group', {'has-error': id in this.state.errors})}>
      <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
      <div className="col-sm-6">
        {field}
      </div>
    </div>
  }
})

React.render(<Billing />, document.getElementById('billing'))

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
