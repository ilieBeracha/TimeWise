import { openai } from "../1-dal/dalOpenai";

export async function getPrefrencesFromOpenai(message: any) {
    console.log(message);
    
    const messages:any = [
        {
            role: 'system', content: 'Act like an travel assistant who knows the world perfectly, write only in json format! : [{country: ___ , reccomendedCity: ___ ,description: ___}] , do not leave comments or anything not in the format i requested. give at least 10 destinations'
        },
        {
            role:'user', content: `the type of the vacation is : ${message.type} , the budget is : ${message.budget} , from : ${message.arrive} to : ${message.return} , with : ${message.with} , additional information : ${message.extrainfo} departure from Tel Aviv, Israel`
        }
    ]

    try {
        const completion: any = openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: messages
        })

        let { data } = await completion
        const reply = data.choices[0].message.content;
        console.log(reply);
        return reply
        
    } catch (e) {
        console.log(e);
        return 'There has been an error, try again'
    }
}