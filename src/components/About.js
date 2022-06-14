import React from 'react'
import { Card } from 'react-bootstrap'

function About() {
    return (
        <div style={{ transform: 'translate(-50%, -50%)', top:'50%', left:'50%', position:'absolute', height:'50%', width:'50%', }}>
            <Card className="text-center">
                <Card.Header><h1 style={{color:'##4c4c4c'}}>About Us</h1></Card.Header>
                <Card.Body>
                    <Card.Text>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default About