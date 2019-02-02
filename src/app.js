const React = 'react';
const ReactDOM = 'react-dom';

class ServiceChooser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0,
    };
  }

  addTotal = (price) => {
    this.setState({ total: this.state.total + price })
  };

  render() {
    let services = this.props.item((service) =>
      <Service
        name={service.name}
        price={service.price}
        active={service.active}
        addTotal={this.addTotal}
      />
    );
    return (
      <div>
        <h1>Our services</h1>
        <div id="services">
          {services}
          <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
        </div>
      </div>
    )

  }
}

class Service extends React.Component {
constructor(props){
  super(props);
  this.state = {
    active: false,
  };
}

  clickHandler = () => {
    const active = !this.state.active;
    this.setState({ active: active });
    this.props.addTotal(active ? this.props.price : -this.props.price);
  };

  render() {
    return (
      <p
        className={this.state.active ? 'active' : ''}
        onClick={this.clickHandler}>
        {this.props.name}
        <b>${this.props.price.toFixed(2)}</b>
      </p>
    )
  }
}

var services = [
  { name: 'Web Development', price: 300 },
  { name: 'Design', price: 400 },
  { name: 'Integration', price: 250 },
  { name: 'Training', price: 220 }
];


// Render the ServiceChooser component, and pass the array of services

ReactDOM.render(
  <ServiceChooser items={ services } />,
  document.getElementById('app')
);
