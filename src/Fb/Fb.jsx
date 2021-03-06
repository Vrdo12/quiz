import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import './Fb.scss';


const Fb = () =>{
    return(
        <>
            <div className="fbcontainer">
                <div className="fbhead">
                    <div className="general">
                    <div className="logo">
                       <a href="https://www.facebook.com/">facebook</a>
                    </div>
                    <div className="signup">
                        <Link onClick={()=> window.open("https://www.facebook.com/r.php?locale=ru_RU", "_blank")}>Создать аккаунт</Link>
                    </div>
                    </div>
                </div>
                <div className="fbbody">
                    <div className="gen">
                        <div className="nofication">
                            <div className="ico">
                                <BsFillInfoCircleFill />
                            </div>
                            <div className="txt">
                                <span>Войдите, чтобы продолжить.</span>
                            </div>
                        </div>
                    </div>
                    <div className="login">
                        <div className="title">Вход на Facebook</div>
                        <div className="nofit">Войдите, чтобы продолжить.</div>
                        <div className="loger">
                            <form>
                                <input type="text" placeholder="Электронный адрес или номер телефона" />
                                <input type="text" placeholder="Пароль" />
                                <button>Вход</button>
                            </form>
                        </div>
                        <div className="forget">
                            <div className="forg">
                                <Link onClick={()=> window.open("https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login", "_blank")}>Забыли аккаунт?</Link>
                            </div>
                            <div className="or">
                                <span>или</span>
                            </div>
                            <div className="create">
                                <div className="gr">
                                    <Link onClick={()=> window.open("https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085&locale=ru_RU&display=page", "_blank")}>Создать аккаунт</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fbfooter">
                    <div className="fbcontent">
                        <div className="links">
                            <ul>
                            <li className="gain">Русский</li>
                            <li><a href="https://hy-am.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">Հայերեն</a></li>
                            <li><a href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">English (US)</a></li>
                            <li><a href="https://fr-fr.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">Français (France)</a></li>
                            <li><a href="https://de-de.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">Deutsch</a></li>
                            <li><a href="https://ar-ar.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">العربية</a></li>
                            <li><a href="https://tr-tr.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">Türkçe</a></li>
                            <li><a href="https://es-la.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">Español</a></li>
                            <li><a href="https://pt-br-fr.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">Português (Brasil)</a></li>
                            <li><a href="https://it-it.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">Italiano</a></li>
                            <li><a href="https://hi-in.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085">हिन्दी</a></li>
                            <li><a href="https://fr-fr.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085"></a></li>
                            <li><a href="https://www.facebook.com/">
                                    <div className="plus">
                                        <AiOutlinePlus />
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                        <div className="bord"></div>
                        <div className="reg">
                            <ul>
                                <li><a href="https://www.facebook.com/r.php">Регистрация</a></li>
                                <li><a href="https://www.facebook.com/login/">Вход</a></li>
                                <li><a href="https://www.messenger.com/">Messenger</a></li>
                                <li><a href="https://www.facebook.com/lite/">Facebook Lite</a></li>
                                <li><a href="https://www.facebook.com/watch/">Watch</a></li>
                                <li><a href="https://www.facebook.com/directory/people/">Люди</a></li>
                                <li><a href="https://www.facebook.com/directory/pages/">Страницы</a></li>
                                <li><a href="https://www.facebook.com/pages/category/">Категории Страниц</a></li>
                                <li><a href="https://www.facebook.com/places/">Места</a></li>
                                <li><a href="https://www.facebook.com/games/">Игры</a></li>
                                <li><a href="https://www.facebook.com/directory/places/">Места</a></li>
                                <li><a href="https://www.facebook.com/marketplace/">Marketplace</a></li>
                                <li><a href="https://pay.facebook.com/">Facebook Pay</a></li>
                                <li><a href="https://www.facebook.com/directory/groups/">Группы</a></li>
                                <li><a href="https://www.oculus.com/">Oculus</a></li>
                                <li><a href="https://portal.facebook.com/">Portal</a></li>
                                <li><a href="https://www.instagram.com/">Instagram</a></li>
                                <li><a href="https://www.facebook.com/fundraisers/">Местные</a></li>
                                <li><a href="https://www.facebook.com/fundraisers/">Благотворительные акции</a></li>
                                <li><a href="https://www.facebook.com/biz/directory/">Услуги</a></li>
                                <li><a href="https://www.facebook.com/facebook">О нас</a></li>
                                <li><a href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fads%2Fcreate%2F%3Fcampaign_id%3D402047449186%26placement%3Dpflo%26extra_1%3Dnot-admgr-user">Создать рекламу</a></li>
                                <li><a href="https://www.facebook.com/pages/create/?ref_type=site_footer">Создать Страницу</a></li>
                                <li><a href="https://developers.facebook.com/?ref=pf">Разработчикам</a></li>
                                <li><a href="https://www.facebook.com/careers/?ref=pf">Вакансии</a></li>
                                <li><a href="https://www.facebook.com/privacy/explanation">Конфиденциальность</a></li>
                                <li><a href="https://www.facebook.com/policies/cookies/">Файлы cookie</a></li>
                                <li><a href="https://www.facebook.com/help/568137493302217">Выбор рекламы</a></li>
                                <li><a href="https://www.facebook.com/policies?ref=pf">Условия использования</a></li>
                                <li><a href="https://www.facebook.com/help/?ref=pf">Справка</a></li>
                            </ul>
                        </div>
                        <div className="right">
                            <span> Facebook © 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fb;