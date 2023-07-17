import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';

function UserForm() {
    const [users, setUsers] = useState([
        { id: 1, name: 'User 1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', email: 'user2@example.com' },
        { id: 3, name: 'User 3', email: 'user3@example.com' },
    ]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleAdd = () => {
        if (name === '' || email === '') {
            setError('Please enter a name and email.');
            return;
        }
        const newUser = { id: users.length + 1, name: name, email: email };
        setUsers([...users, newUser]);
        setName('');
        setEmail('');
        setError('');
    };

    const handleDelete = (id) => {
        const filteredUsers = users.filter((user) => user.id !== id);
        setUsers(filteredUsers);
    };

    return (
        <Stack spacing={4} w="30%">
            <FormControl isInvalid={error !== ''}>
                <FormLabel>Name</FormLabel>
                <Input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </FormControl>
            <FormControl isInvalid={error !== ''}>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Button colorScheme="blue" onClick={handleAdd}>
                Add User
            </Button>
        </Stack>
    );
}

export default UserForm;