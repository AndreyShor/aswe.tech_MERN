import './App.scss';
import Menu from "./Menu/Menu"
import Header from "./Header/Header"
import {Component} from 'react';

interface IProps {}

interface IState {
    person: Array<{name: string, age: number}>;
    openClose : boolean
}

class App extends Component < IProps,
IState > {

    constructor(props : IProps) {
        super(props);

        this.state = {
            person: [{name: "Andrey", age:29}, {name: "Nikita", age:35}],
            openClose: true
        };
    }

    private switchHandler = () => {
        console.log("was Clickedd");
        let openClose = this.state.openClose;
        let arrayUser = this.state.person;
        this.setState({person: arrayUser, openClose: openClose});
    }

    private closeOpenMenu = () => {
        console.log("Close");
        let arrayUser = this.state.person;
        const openClose = !this.state.openClose;
        this.setState({person: arrayUser, openClose: openClose});
    }

    private onDeleteUser = (index: number) => {
        console.log("Delete");
        const openClose = this.state.openClose;
        const arrayUser = [...this.state.person]
        arrayUser.splice(index, 1)
        this.setState({person: arrayUser, openClose: openClose});
    }

    render() {
        
        let list : JSX.Element | null = null

        if (this.state.openClose) {
            list = (
                <div className="menuBlock">
                    {this.state.person.map( (person, index) => {
                        return <Menu
                                click={() => this.onDeleteUser(index)}
                                name={person.name !} 
                                age={person.age.toString()}
                                key={index}
                                />
                    })}
                </div>
            )
        }

        return (
            <div className="mainArea">
                <Header/>
                <button
                    onClick={this.closeOpenMenu}
                    style={{
                    padding: "10px",
                    width: "100px"
                }}>Close/ Open menu
                </button>
                {list}
            </div>
        )
    }
}

export default App;
