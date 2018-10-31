class Timer input extends React. Component {
    render () {
     return (
      <div style={{margin-left:80}}>
<h3>Add the timer for the activity</h3>
<input type="number” minutes={this.props.minutes} required/> 
</div>
      );
    }
}
Class timer extends react. Component { 
render() {
return(
<div>
<h1 style={{font size:80, margin-left:80}}>{this.props.minutes}:{this.props.seconds}
</h1>
</div>
     );s
   }
}
