import { v4 as uuidv4 } from 'uuid';
import { serviceGetTechnology } from "../src/services/technologies";
import { serviceGetUser } from '../src/services/users';

jest.mock('../src/services/users', ()=> {
    return {
        serviceGetUser: jest.fn().mockReturnValue({
            username : "java",
            user : 'iago',
            id : 1,
            technologies: [
                {
                    id: '2',
                    title: 'java',
                    studied: true ,
                    deadline: '2023-04-27',
                    created_at: '2020-06-25'
                }
            ]
        })
    }
});

describe("Serviços de Tecnologias", () => {

    const mockUser = {
        username : "java",
        user : 'iago',
        id : 1,
        technologies: [
            {
                id: '2',
                title: 'java',
                studied: true ,
                deadline: '2023-04-27',
                created_at: '2020-06-25'
            }
        ]
    };

    test("serviceGetTechnologies", () => {
        const tecnologia = serviceGetTechnology(2, 1);
        expect(tecnologia.id).toBe(mockUser.technologies[0].id);
    })

})