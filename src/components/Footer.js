const Footer = ({theme}) => {
    return ( 
        <footer className="mono theme text-center">
            <hr/>
            <div className="container p-4 pb-0">
                <section>
                    <a className="btn btn-info mx-2"
                        href="#!"
                        role="button">
                        <i className="bi bi-instagram"></i>
                    </a>

                    <a className="btn btn-info mx-2"
                    href="#!"
                    role="button">
                    <i className="bi bi-facebook"></i>
                    </a>

                    <a className="btn btn-info mx-2" //FIXME: ADD LEGIT SOCIAL MEDIA INFO
                    href="#!"
                    role="button">
                    <i className="bi bi-linkedin"></i>
                    </a>

                    <a className="btn btn-info mx-2"
                    href="https://github.com/WidestView"
                    role="button">
                    <i className="bi bi-github"></i>
                    </a>
                </section>
            </div>
            <div className={`text-center p-3 mono theme`}>
                &copy; {new Date().getFullYear()} <a className="mono theme" href="https://github.com/WidestView">WidestView</a>
            </div>
        </footer>
     );
}
 
export default Footer;
