import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            items: [],
            query:''
        };

        this.changeHandler = e => {
           
            this.setState({query: e.target.value});
            
        }
    }

    componentDidUpdate() {
        axios.post('http://api.univer.loc/curriculum/list',
            'query='+this.state.query,
        ) 
        .then(({ data: items }) => this.setState({ items }))
        .catch(() => this.setState({ error: true }));
    }



    render() {
        let list;
        if(this.state.items.length > 0 && this.state.query.length > 0)
        {
           list = <div className="List" id="list">
                <ul id="suggestionSearch">
                {this.state.items.map(item => (
                    <li key={item.id}>
                        <Link to={item.name}>{item.name}</Link>
                    </li>
                ))}
                </ul>
            </div>;
        }
        return( 
            <div>
                <div className="Input">
                    <input 
                        className="InputText SearchInput" 
                        type="text" 
                        onChange={this.changeHandler} 
                        placeholder="Начните вводить фамилию преподавателя или группы"
                        />
                </div>
                {list}
            </div>
        );
       
    }
}
  
export default Search;