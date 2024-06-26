let headerCAD = `
    <nav class="barra-nav" id="barra-nav">
        <div class="container-flex">
            <div class="divlogo">
                <a href="index.html">
                    <img src="./img/LOGOpoppins.svg" alt="Logo" class="img-res">
                </a>
            </div>
            <div class="divbotonheader">
                <a class="botonheader" href="adopcion.html">
                    <img src="./img/1.ico" alt="">
                </a>
                <a class="botonheader" href="comunidad.html">
                    <img src="./img/2.ico" alt="">
                </a>
                <a class="botonheader" href="apoyo.html">
                    <img src="./img/3.ico" alt="">
                </a>
                <a class="botonheader" href="contacto.html">
                    <img src="./img/4.ico" alt="">
                </a>
            </div>
        </div>
    </nav>
`


document.querySelector(".main-header").innerHTML = headerCAD;

let footerCAD = `
<div class="footer-sections">
            <section class="footer-section">
                <h2 class="footer-title">Enlaces de interés</h2>
                <a href="https://www.instagram.com/"><p class="footer-txt">Instagram</p></a>
                <a href="https://www.facebook.com/"><p class="footer-txt">Facebook</p></a>
                <a href="https://www.youtube.com/"><p class="footer-txt">Youtube</p></a>
            </section>
            <section class="footer-section">
                <h2 class="footer-title">Contacto</h2>
                <p class="footer-txt">Telefono: +5491100303456</p>
                <p class="footer-txt">Correo: refugiohuellitasdeamor@corrreo.com</p>
            </section>
            <section class="footer-section">
                <h2 class="footer-title">Boletín mensual</h2>
                <p class="footer-txt">Subcribite y entérate antes de todas las novedades</p>
            </section>
            <section class="footer-section">
                <h2 class="footer-title">Políticas de privacidad</h2>
                <p class="footer-txt">Cookies</p>
                <p class="footer-txt">Términos y condiciones</p>
            </section>
        </div>
        <p class="copy">Refugio Huellitas de Amor - © 2023 - Todos los Derechos Reservados - <a href="adopcion_admin.html">Admin</a></p>
        `

document.querySelector(".main-footer").innerHTML = footerCAD;