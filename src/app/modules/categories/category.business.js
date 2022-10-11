const repositories = require('./category.repository')
const { errors } = require('../../services/error.service')

//Business: Camada de negócios -> faz as validações e chama o banco de dados (repository)
exports.createCategory = async (category) => {

    try {

        const categoryCreated = await repositories.create(category)

        if (!categoryCreated) {

            throw errors.internalServerError(`Houve um erro ao cadastrar a categoria`)
        }

        return categoryCreated

    } catch (error) {

        throw error
    }
}

exports.editCategory = async (categoryId, category) => {

    try {

        const categoryEdited = await repositories.update(categoryId, category)

        if (!categoryEdited) {

            throw errors.internalServerError(`Houve um erro ao editar a categoria`)
        }

        return categoryEdited

    } catch (error) {

        throw error
    }
}

exports.deleteCategory = async (categoryId) => {

    try {

        const categoryDeleted = await repositories.delete(categoryId)

        if (!categoryDeleted) {

            throw errors.internalServerError(`Houve um erro ao excluir a categoria`)
        }

        return categoryDeleted

    } catch (error) {

        throw error
    }
}

exports.getCategories = async () => {

    try {

        const categories = await repositories.find({})

        if (!categories) {

            throw errors.notFound(`Nenhuma categoria foi encontrada`)
        }

        return categories

    } catch (error) {

        throw error
    }
}