

function Footer() {
    let year = new Date().getFullYear()

    return (
        <footer className="footer">
            <p className="footerContent">© {year} Men of Mission and Service</p>
            <p className="footerContent">Made With 💜 By <a className="gitLink" href="https://github.com/IntuitiveHarmony" target="_blank" rel="noopener noreferrer" >Intuitive Harmony</a></p>
        </footer>
    )

}

export default Footer