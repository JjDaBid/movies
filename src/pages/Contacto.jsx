import Layout from "../components/layout"

const Contacto = () => {
  return (
    <Layout>
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-black text-white">
            <div className="row w-100">
                <div className="col-md-6 offset-md-3">
                <div className="bg-light p-5 rounded shadow">
                    <h2 className="text-center text-dark mb-4">Contacto</h2>
                    <p className="text-center text-dark mb-4">
                    Es un gusto para nosotros poder atender tus requerimientos
                    </p>
                    <form>
                    <div className="mb-3">
                        <label htmlFor="formName" className="form-label text-dark">Nombre</label>
                        <input type="text" className="form-control" id="formName" placeholder="Your Name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formEmail" className="form-label text-dark">Email</label>
                        <input type="email" className="form-control" id="formEmail" placeholder="Your Email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formMessage" className="form-label text-dark">Mensaje</label>
                        <textarea className="form-control" id="formMessage" rows="5" placeholder="Your Message"></textarea>
                    </div>

                    <button type="submit" className="btn btn-danger w-100">Enviar</button>
                    </form>
                </div>
                </div>
            </div>
        </div> 
    </Layout>
  )
}
export default Contacto
