module.export={
    index(req, res){
        const roomID = req.params.room;
        const questionID = req.params.question;
        const action = rep.params.action;
        const password = req.body.password


        console.log(`room=${roomID}, questionID = ${questionID}, action = ${action}, Password = ${password}`)

    }



}