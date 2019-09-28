module.exports = [
    {
        name: 'chat',
        type:   'site',
        parent: null,
        admins: ['super']
    },
    {
        name: 'sport',
        type:   'group',
        parent: 'chat',
        admins: ['super','david']
    },
    {
        name: 'golf',
        type:   'channel',
        parent: 'sport',
        admins: ['super','david','rory']
    },
    {
        name: 'rory',
        type:   'member',
        parent: 'golf',
        admins: ['super','david','rory']
    },
    {
        name: 'i like golf',
        type:   'message',
        parent: 'rory',
        admins: ['super','david','rory']
    },


]