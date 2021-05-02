import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src='https://res.cloudinary.com/dm2gfj40h/image/upload/v1619977529/logo_qftsgv.svg' />
            <NavMenu>
                <a>
                    <img src="https://res.cloudinary.com/dm2gfj40h/image/upload/v1619977529/home-icon_rwfgf4.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="https://res.cloudinary.com/dm2gfj40h/image/upload/v1619977532/search-icon_pkhmbz.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="https://res.cloudinary.com/dm2gfj40h/image/upload/v1619977534/watchlist-icon_w4twhm.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="https://res.cloudinary.com/dm2gfj40h/image/upload/v1619977530/original-icon_ckzix0.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="https://res.cloudinary.com/dm2gfj40h/image/upload/v1619977530/movie-icon_y62c7x.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="https://res.cloudinary.com/dm2gfj40h/image/upload/v1619977532/series-icon_kl3qpw.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src='https://res.cloudinary.com/dm2gfj40h/image/upload/v1619977532/profile-pic_hd1dvx.jpg'/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items-center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`