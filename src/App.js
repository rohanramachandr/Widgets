import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';


const items = [

    {
        title: 'What is react?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'What use react?',
        content: 'React is a favorite js library among engineers'
    },
    {
        title: 'How do you use react?',
        content: 'You use react by creating components'
    }

];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade Of Blue',
        value: 'blue'
    }
];



const App = () => {
    const [selected, setSelected] = useState([options[0]]);
    
  
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search />

            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select A Color"
                    options={options}
                    selected={selected} 
                    onSelectedChange={setSelected}
                />

            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;

