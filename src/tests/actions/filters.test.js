import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../../actions/filters';

test ('Should generate setStartDate action generator', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test ('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect (action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    }); 
});

test('Should generate set text filter object with text value', () =>{
    const text = 'Something in'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should generate set text filter object with default value', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate action object for sort by date', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE' });
});

test('Should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});





// test('Should generate sort by date object with text value', () => {
//     const action = sortByDate();
//     expect(action).toEqual({
//         type: 'SORT_BY_DATE'
//     })
// })

// test('Should generate sort by amount object with text value', () => {
//     const action = sortByAmount();
//     expect(action).toEqual({
//         type: 'SORT_BY_AMOUNT'
//     })
// })