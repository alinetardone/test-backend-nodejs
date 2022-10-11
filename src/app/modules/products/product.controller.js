const business = require('./product.business')

//Controller: recebe os dados da rota e redireciona pra camada de negócios (business)
class clsProducts {

    static async createProduct(req, res) {

        try {

            const { product } = req.body

            if (!product) return res.status(400).send("Parâmetros não enviados.")

            let productCreated = await business.createProduct(product)

            return res.status(201).json(productCreated)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editProduct(req, res) {

        try {

            const { product } = req.body
            const { productId } = req.params

            if ( !product || !productId) return res.status(400).send("Parâmetros não enviados.")

            let productEdited = await business.editProduct(productId, product)

            return res.status(200).json(productEdited)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async deleteProduct(req, res) {

        try {

            const { productId } = req.params

            if (!productId) return res.status(400).send("Parâmetros não enviados.")

            let productDeleted = await business.deleteProduct(productId)

            return res.status(200).json(productDeleted)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async getProducts(req, res) {

        try {

            let queries = req.query

            let products = await business.getProducts(queries)

            return res.status(200).json(products)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsProducts
