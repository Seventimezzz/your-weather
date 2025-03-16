import { NavLink } from 'react-router'
import { ROUTER_PATHS, SearchString } from 'shared/index'
import Logo from '../../shared/assets/img/logo.png'
import cls from './Header.module.scss'

export const Header = () => {

    const linksList = [
        {
            to: ROUTER_PATHS.MAIN,
            text: 'current weather'
        },
        {
            to: ROUTER_PATHS.HISTORY,
            text: 'weather for the past day'
        }
    ]

    return (
        <nav className={cls.header}>
            <img src={Logo} className={cls.img} alt="LOGO" />
            {linksList.map((el, index) => {
                return (
                    <div key={index}>
                        <NavLink
                            to={el.to}
                            className={({ isActive }) => isActive ? cls.active : cls.default}
                        >
                            {el.text}
                        </NavLink>
                    </div>
                )
            })}
            <SearchString/>
        </nav>
    )
}