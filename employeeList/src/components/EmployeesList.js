import React from 'react';

class EmployeesList extends React.Component {
  state = {
    searchText: '',
    employees: this.props.employees,
  };

  filterOnChange = (event) => {
    this.setState({
      ...this.state,
      searchText: event.target.value,
      employees: this.props.employees.filter(({ name }) => {
        const lowerCasedName = name.toLowerCase();
        const lowerCasedSearchText = event.target.value.toLowerCase();
        return lowerCasedName.includes(lowerCasedSearchText);
      }),
    });
  };

  render() {
    const { employees } = this.state;
    return (
      <React.Fragment>
        <div className='controls'>
          <input
            type='text'
            className='filter-input'
            data-testid='filter-input'
            onChange={this.filterOnChange}
          />
        </div>
        <ul className='employees-list'>
          {employees.map((employee) => (
            <li key={employee.name} data-testid='employee'>
              {employee.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
