import React from 'react';

const tasks = [
    { id: 1, title: 'Find a book.', description: 'Check availability within the library and select one for rental.' },
    { id: 2, title: 'Read the book.', description: 'Read the contents of the book and enjoy at your own leasure.' },
    { id: 3, title: 'Return the boon.', description: 'After reading the book, be sure to return it to the library.' }
];

function TaskList() {
    return (
        tasks.map(task => (
            <div key={task.id} className='task-item'>
                <Link link='/task/${task.id}'>{task.title}</Link>
                <p>{task.description}</p>
            </div>
        ))
    );
}

export default TaskList;