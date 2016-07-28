    // Presentational component
    var GreeterMessage = React.createClass({

        render: function(){
            var name = this.props.name;
            var message = this.props.message;
            
            return (
              <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
              </div>
            );
        }
    });

    // Presentational component
    var GreeterForm = React.createClass({

        // Submit function
        onFormSubmit: function(e){
            e.preventDefault();

            var updates = {};
            var name = this.refs.name.value;
            var message = this.refs.message.value;
            
            if (name.length > 0){
                this.refs.name.value = '';
                updates.name = name;
            }
            
            if (message.length > 0){
                this.refs.message.value = '';
                
                updates.message = message;
            }
            
            this.props.onUpdates(updates);

        },
        // Render function
        render: function(){
            return (
                <form onSubmit={this.onFormSubmit}>
                    
                    <input type="text" ref="name" placeholder='Enter name'/>
                    <br/><br/>
                    
                    <textarea rows="4" placeholder='Enter message' cols="50" ref="message"/>                    
                    <br/><br/>
                    
                    <button>Submit</button>
                </form>
            );
        }
    });

    // Container component
    var Greeter = React.createClass({
        getDefaultProps: function(){
            return {
              name: 'React',
              message: 'This is from the Greeter'
            };
        },
        getInitialState: function(){
            
            return {
                name: this.props.name,
                message: this.props.message
            };
        },
        handleUpdates: function(updates){
            this.setState(updates);
        },
        render: function(){
            var name = this.state.name;
            var message = this.state.message;

            return (
                <div>
                    <GreeterMessage name={name} message={message}/>
                    <GreeterForm onUpdates={this.handleUpdates}/>
                </div>
            );
        }
    });

    var name = 'Ryan';
    var theMessage = 'Default message';

    ReactDOM.render(
        <Greeter name={name} message={theMessage}/>,
        document.getElementById('app')
    );
