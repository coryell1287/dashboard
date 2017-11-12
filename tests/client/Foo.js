IntentLabeling.js

<SuggestedIntentDetails
updateCorrectIntent = { this.updateCorrectIntent
}
selectedCorrectIntent = { this.state.selectedCorrectIntent
}
displayError = { this.state.displayError
}
radioSelection = {(input)
=>
this.child = input
}

/>


SuggestedIntent.js


< input
style = {
{
  marginTop: '14px'
}
}
type = "radio"
value = { predictedIntentText }
checked = { selectedCorrectIntent === predictedIntent
}
onChange = { this.onCorrectIntentChange
}
ref = { this.props.radioSelection
}

/>


My
example
I
used
once.class
IntentManager
extends
Component
{


  render()
  {


    return (

      <Dropdown inputRef={node => {
        this.inputNode = node;
      }}/>

    );

  }

}


export default IntentManager;


class Dropdown extends Component {


  render() {

    return (

      <select ref={this.props.inputRef}>
        <option>-- Choose an Intent --</option>
        <option value="service">Service Intent</option>
        <option value="parameter">Parameter Intent</option>
        <option value="entity">Entity Intent</option>
      </select>
    );

  }

}


export default Dropdown;