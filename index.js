const LAYOUT = {
    name: 'fcose',
    quality: 'default',
    randomize: true,
    animate: true,
    animationEasing: 'ease-out',
    uniformNodeDimensions: true,
    packComponents: true,
    tile: true,
    nodeRepulsion: 4500.0,
    idealEdgeLength: 50.0,
    edgeElasticity: 0.45,
    nestingFactor: 0.1,
    gravity: 0.25,
    gravityRange: 3.8,
    gravityCompound: 1.0,
    gravityRangeCompound: 1.5,
    numIter: 2500,
    tilingPaddingVertical: 10.0,
    tilingPaddingHorizontal: 10.0,
    initialEnergyOnIncremental: 0.3,
    step: "all"
};

const STYLE = [
    {
        selector: 'node',
        style: {
            'background-color': '#2B65EC',
            "background-opacity": "0.8",
            "content": "data(name)",
            "font-size": "30px",
            "text-valign": "center",
            "text-halign": "center",
            "text-outline-color": "#555",
            "text-outline-width": "2px",
            "color": "#fff",
            "overlay-padding": "6px",
            "z-index": "10"
        }
    },

    {
        selector: ':parent',
        style: {
            'background-opacity': 0.333,
            'border-color': '#2B65EC',
            'shape': 'round-rectangle',
        }
    },

    {
        selector: 'edge',
        style: {
            'line-color': '#2B65EC',
            'opacity': '0.4',
            'z-index': '5'
        }
    },

    {
        selector: 'node:selected',
        style: {
            'background-color': '#F08080',
            'border-color': 'red',
        }
    },

    {
        selector: 'edge:selected',
        style: {
            'line-color': '#F08080'
        }
    }
];

function makeCyto(id, elements) {
    return cytoscape({
        container: document.getElementById(id),
        ready: function () {
            this.layoutUtilities({
                desiredAspectRatio: this.width() / this.height()
            });
            this.nodes().forEach(function (node) {
                let size = 100;
                node.css("width", size);
                node.css("height", size);
            });
            this.layout(LAYOUT).run();
        },
        layout: {name: 'grid'},
        style: STYLE,
        elements: elements,
    });
}

