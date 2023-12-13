import moment from 'moment';


const Header = () => {
    return (
        <div>
            <h3 className="text-3xl">Header</h3>
            <h2 className="text-3xl text-center">
                {
                    moment().format('MMMM Do YYYY, h:mm:ss a')
                }
            </h2>
        </div>
    );
};

export default Header;