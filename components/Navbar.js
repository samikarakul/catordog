import React from 'react'
import Link from 'next/link';
import {FaCat, FaDog} from "react-icons/fa"
export default function Navbar() {
    
    return (
    <header>
        <h1 id="nav-title"><Link href="/"><a>Home</a></Link></h1>
        <nav>
            <ul>
                <li><Link href="/cats"><a><FaCat/> Cats</a></Link></li>
                <li><Link href="/dogs"><a><FaDog/> Dogs</a></Link></li>
            </ul>
        </nav>
        <style jsx>
            {`
                header {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding: 20px 50px;
                    box-shadow: 0 1px 8px #ddd;
                    background-color: #fff;
                }
                
                header li {
                    list-style: none;
                    display: inline-block;
                    padding: 0 20px;
                }
                
                #nav-title {
                    margin-right: auto;
                    font-size: 1.5em;
                }

                header a {
                    text-decoration: none;
                    color: #555;
                    transition: all 0.3s ease 0s;
                }
                
            `}
        </style>
    </header>
    
    )
}

