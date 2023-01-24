import PropTypes from 'prop-types';


//function User (props){ iki şekilde de kullanılabilir
function User({ name, isLoggedIn, friends }) {

    return (
        <div>
            <h1>{isLoggedIn ? `Merhaba ben ${name}` : "Giriş yapmadınız"}</h1>
            {
                friends.map((friend,index) => <div key={index}>
                    {index}-{friend}
                </div>
                )
            }
        </div>
    )
}

User.propTypes={
    name: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array
    //age: PropTypes.number.isRequired
    //isLoggedIn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
   /* address: PropTypes.shape({
        city: PropTypes.string,
        code: PropTypes.int
    })*/
}

User.defaultProps ={
    name: "Bilgi yok",
    isLoggedIn: false,
    friends: []
}

export default User;