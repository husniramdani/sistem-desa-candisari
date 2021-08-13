import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router';
import { logout } from '@store/auth/action';
import { onResetForm } from '@store/admin/action'

const Navbar = (props, { title }) => {
  const router = useRouter()

  const onLogout = () => {
    props.logout();
    props.onResetForm();
    router.push("/")
  }

  return (
    <>
      <header className="z-10 top-0 px-5 py-3 flex justify-between items-center md:px-16 md:py-5 xl:px-24 bg-blue-500">
        <div className="flex items-center">
          <img
            className="w-9"
            src="images/logo-desa.png"
            alt="logo Desa candisari"
          />
          <p className="font-semibold text-lg text-white ml-2 mb-0">Pemerintah Desa Candisari</p>
        </div>
        <button
          className="text-white font-semibold border rounded px-5 py-2 hover:bg-white hover:text-blue-500"
          onClick={() => onLogout()}
        >
          Keluar
        </button>
      </header>
    </>
  );
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
  isLogin: state.auth.isLogin,
})

const mapDispatchToProps = (dispatch) => {
  return {
    logout: bindActionCreators(logout, dispatch),
    onResetForm: bindActionCreators(onResetForm, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
