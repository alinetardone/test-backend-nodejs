const business = require('./product.business')
const logger = require("../../../../logger")

//Controller: recebe os dados da rota e redireciona pra camada de negócios (business)
class clsProducts {

    static async createProduct(req, res) {

        try {

            const { product } = req.body

            if (!product) return res.status(400).send("Parâmetros não enviados.")

            let productCreated = await business.createProduct(product)

            logger.info(`Produto criado: ${productCreated}`)
            
            return res.status(201).json(productCreated)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editProduct(req, res) {

        try {

            const { product } = req.body
            const { productId } = req.params

            if ( !product || !productId) return res.status(400).send("Parâmetros não enviados.")

            let productEdited = await business.editProduct(productId, product)

            logger.info(`Produto editado: ${productEdited}`)

            return res.status(200).json(productEdited)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async deleteProduct(req, res) {

        try {

            const { productId } = req.params

            if (!productId) return res.status(400).send("Parâmetros não enviados.")

            let productDeleted = await business.deleteProduct(productId)

            logger.info(`Produto excluído: ${productDeleted}`)

            return res.status(200).json(productDeleted)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async getProducts(req, res) {

        try {

            let queries = req.query

            let products = await business.getProducts(queries)

            return res.status(200).json(products)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsProducts
