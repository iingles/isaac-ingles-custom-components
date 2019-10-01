var servers = 
[
    { 
        serverName: 'Server One',
        serverStatus: 'Optimal',
        serverMsg: 'No Messages',
        id: 'serverone',
        connections: [
            "127.0.0.1",
            "192.168.1.1",
            "172.217.12.14",
            "98.138.219.232"
        ]
    },
    { 
        serverName: 'Server Two',
        serverStatus: 'Warning',
        serverMsg: 'Running Diagnostics',
        id: 'servertwo',
        connections: [
            "127.0.0.1",
            "192.168.1.1",
            "172.217.12.14",
            "98.138.219.232"
        ]
    },
    { 
        serverName: 'Server Three',
        serverStatus: 'Optimal',
        serverMsg: 'No Messages',
        id: 'serverthree',
        connections: [
            "127.0.0.1",
            "192.168.1.1",
            "172.217.12.14",
            "98.138.219.232"
        ]
    },
    { 
        serverName: 'Server Four',
        serverStatus: 'Warning',
        serverMsg: 'Maximum number of connections',
        id: 'serverfour',
        connections: [
            "127.0.0.1",
            "192.168.1.1",
            "172.217.12.14",
            "98.138.219.232"
        ]
    },
    { 
        serverName: 'Server Five',
        serverStatus: 'Error',
        serverMsg: 'Connection Error',
        id: 'serverfive',
        connections: [
            "127.0.0.1",
            "192.168.1.1",
            "172.217.12.14",
            "98.138.219.232"
        ]
    },
];

export default servers;