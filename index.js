const LAYOUT = {
    name: 'fcose',
    quality: 'default',
    randomize: false,
    animate: true,
    animationEasing: 'ease-out',
    uniformNodeDimensions: true,
    packComponents: true,
    tile: false,
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

const ELEMENTS = [{ group: 'nodes', data: { id: 'n0', name: 'wow!' } },
{ group: 'nodes', data: { id: 'n1' } },
{ group: 'nodes', data: { id: 'n2' } },
{ group: 'nodes', data: { id: 'n3' } },
{ group: 'nodes', data: { id: 'n4', parent: 'n37' } },
{ group: 'nodes', data: { id: 'n5' } },
{ group: 'nodes', data: { id: 'n6' } },
{ group: 'nodes', data: { id: 'n7', parent: 'n37' } },
{ group: 'nodes', data: { id: 'n8', parent: 'n37' } },
{ group: 'nodes', data: { id: 'n9', parent: 'n37' } },
{ group: 'nodes', data: { id: 'n10', parent: 'n38' } },
{ group: 'nodes', data: { id: 'n12' } },
{ group: 'nodes', data: { id: 'n13' } },
{ group: 'nodes', data: { id: 'n14' } },
{ group: 'nodes', data: { id: 'n15' } },
{ group: 'nodes', data: { id: 'n16' } },
{ group: 'nodes', data: { id: 'n17' } },
{ group: 'nodes', data: { id: 'n18' } },
{ group: 'nodes', data: { id: 'n19' } },
{ group: 'nodes', data: { id: 'n20' } },
{ group: 'nodes', data: { id: 'n21' } },
{ group: 'nodes', data: { id: 'n22' } },
{ group: 'nodes', data: { id: 'n23' } },
{ group: 'nodes', data: { id: 'n24', parent: 'n39' } },
{ group: 'nodes', data: { id: 'n25', parent: 'n39' } },
{ group: 'nodes', data: { id: 'n26', parent: 'n42' } },
{ group: 'nodes', data: { id: 'n27', parent: 'n42' } },
{ group: 'nodes', data: { id: 'n28', parent: 'n42' } },
{ group: 'nodes', data: { id: 'n29', parent: 'n40' } },
{ group: 'nodes', data: { id: 'n31', parent: 'n41' } },
{ group: 'nodes', data: { id: 'n32', parent: 'n41' } },
{ group: 'nodes', data: { id: 'n33', parent: 'n41' } },
{ group: 'nodes', data: { id: 'n34', parent: 'n41' } },
{ group: 'nodes', data: { id: 'n35', parent: 'n41' } },
{ group: 'nodes', data: { id: 'n36', parent: 'n41' } },
{ group: 'nodes', data: { id: 'n37' } },
{ group: 'nodes', data: { id: 'n38' } },
{ group: 'nodes', data: { id: 'n39', parent: 'n43' } },
{ group: 'nodes', data: { id: 'n40', parent: 'n42' } },
{ group: 'nodes', data: { id: 'n41', parent: 'n42' } },
{ group: 'nodes', data: { id: 'n42', parent: 'n43' } },
{ group: 'nodes', data: { id: 'n43' } },
{ group: 'nodes', data: { id: 'n44' } },
{ group: 'nodes', data: { id: 'n45' } },
{ group: 'nodes', data: { id: 'n46' } },
{ group: 'nodes', data: { id: 'n47' } },
{ group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } },
{ group: 'edges', data: { id: 'e1', source: 'n1', target: 'n2' } },
{ group: 'edges', data: { id: 'e2', source: 'n2', target: 'n3' } },
{ group: 'edges', data: { id: 'e3', source: 'n0', target: 'n3' } },
{ group: 'edges', data: { id: 'e4', source: 'n1', target: 'n4' } },
{ group: 'edges', data: { id: 'e5', source: 'n2', target: 'n4' } },
{ group: 'edges', data: { id: 'e6', source: 'n4', target: 'n5' } },
{ group: 'edges', data: { id: 'e7', source: 'n5', target: 'n6' } },
{ group: 'edges', data: { id: 'e8', source: 'n4', target: 'n6' } },
{ group: 'edges', data: { id: 'e9', source: 'n4', target: 'n7' } },
{ group: 'edges', data: { id: 'e10', source: 'n7', target: 'n8' } },
{ group: 'edges', data: { id: 'e11', source: 'n8', target: 'n9' } },
{ group: 'edges', data: { id: 'e12', source: 'n7', target: 'n9' } },
{ group: 'edges', data: { id: 'e13', source: 'n13', target: 'n14' } },
{ group: 'edges', data: { id: 'e14', source: 'n12', target: 'n14' } },
{ group: 'edges', data: { id: 'e15', source: 'n14', target: 'n15' } },
{ group: 'edges', data: { id: 'e16', source: 'n14', target: 'n16' } },
{ group: 'edges', data: { id: 'e17', source: 'n15', target: 'n17' } },
{ group: 'edges', data: { id: 'e18', source: 'n17', target: 'n18' } },
{ group: 'edges', data: { id: 'e19', source: 'n18', target: 'n19' } },
{ group: 'edges', data: { id: 'e20', source: 'n17', target: 'n20' } },
{ group: 'edges', data: { id: 'e21', source: 'n19', target: 'n20' } },
{ group: 'edges', data: { id: 'e22', source: 'n16', target: 'n20' } },
{ group: 'edges', data: { id: 'e23', source: 'n20', target: 'n21' } },
{ group: 'edges', data: { id: 'e25', source: 'n23', target: 'n24' } },
{ group: 'edges', data: { id: 'e26', source: 'n24', target: 'n25' } },
{ group: 'edges', data: { id: 'e27', source: 'n26', target: 'n38' } },
{ group: 'edges', data: { id: 'e29', source: 'n26', target: 'n39' } },
{ group: 'edges', data: { id: 'e30', source: 'n26', target: 'n27' } },
{ group: 'edges', data: { id: 'e31', source: 'n26', target: 'n28' } },
{ group: 'edges', data: { id: 'e33', source: 'n21', target: 'n31' } },
{ group: 'edges', data: { id: 'e35', source: 'n31', target: 'n33' } },
{ group: 'edges', data: { id: 'e36', source: 'n31', target: 'n34' } },
{ group: 'edges', data: { id: 'e37', source: 'n33', target: 'n34' } },
{ group: 'edges', data: { id: 'e38', source: 'n32', target: 'n35' } },
{ group: 'edges', data: { id: 'e39', source: 'n32', target: 'n36' } },
{ group: 'edges', data: { id: 'e40', source: 'n16', target: 'n40' } },
{ group: 'edges', data: { id: 'e41', source: 'n44', target: 'n45' } },
{ group: 'edges', data: { id: 'e42', source: 'n44', target: 'n46' } },
{ group: 'edges', data: { id: 'e43', source: 'n45', target: 'n46' } }
];

function makeCyto(id) {
    return cytoscape({
        container: document.getElementById('cy'),
        ready: function () {
            let layoutUtilities = this.layoutUtilities({
              desiredAspectRatio: this.width() / this.height()
            });
            this.nodes().forEach(function (node) {
              let size = 100;
              node.css("width", size);
              node.css("height", size);
            });
            this.layout({ name: 'fcose', animationEasing: 'ease-out' }).run();
          },
        layout: LAYOUT,
        style: STYLE,
        elements: ELEMENTS,
    });
}

