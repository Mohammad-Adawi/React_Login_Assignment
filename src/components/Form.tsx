import * as React from "react";
import '../styles/App.css';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
export class Form extends React.Component{
 public state = {
    email: "",
    password: "",
    loggedin: false,
  };

  public handleChange = (e: any) => {
      this.setState({
        [e.target.name]: e.target.value
      });
  };

  public handleSubmit = (e: any) => {
    e.preventDefault();

    this.setState({
      loggedin: true,
    });

  }

  public handleLogout = (e: any) => {
    this.setState({
      loggedin: false,
    });
    
  }

 public render(){
   if(this.state.loggedin === true){
            return <div className="logged-in">
            <div className="row justify-end p-0">
          <div className="col col-md-4" />
          <div className="col col-md-4" />
            <button onClick={e => this.handleLogout(e)} className="btn btn-primary">
            <Button content="Log Out" color='red' />
            </button>
            <form>
            <h3>
              {this.state.email}
              <React.Fragment>
                <Card>
                    <Image src='cartoon.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.state.email}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2007</span>
                        </Card.Meta>
                        <Card.Description>
                            lives in Edmonton.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        5000 Friends
                    </Card.Content>
                </Card>
            </React.Fragment>
            
            </h3>
            </form>
            </div>
            </div>
          }
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="row justify-end p-0">
          <div className="col col-md-4">
            <div className="form-group">
              <label>Email</label>
              <input 
                name="email" 
                value={this.state.email} 
                placeholder="Email Address" 
                required={true} 
                type="email" 
                className="form-control" 
                onChange={e => this.handleChange(e)} 
               
              />
            </div>
          </div>
          <div className="col col-md-4">
            <div className="form-group">
              <label>Password</label>
              <input 
                name="password" 
                value={this.state.password} 
                placeholder="Password" 
                required={true} 
                type="password" 
                className="form-control" 
                onChange={e => this.handleChange(e)} 
               
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    );
  }
}