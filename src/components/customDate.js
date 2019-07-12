
import moment from 'moment';

const CustomDate = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

export default CustomDate;