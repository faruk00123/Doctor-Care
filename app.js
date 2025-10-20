const services = [
    {
       id: 1,
       title: "Problemas digestivos",
       description: "The primary meaning of Doctor in English has historically been with reference to the holder of a doctoral degree." 
    },
    {
       id: 2,
       title: "Saude Hormonal",
       description: "The primary meaning of Doctor in English has historically been with reference to the holder of a doctoral degree." 
    },
    {
       id: 3,
       title: "Bem-estar mental",
       description: "The primary meaning of Doctor in English has historically been with reference to the holder of a doctoral degree." 
    },
    {
       id: 4,
       title: "Cuidados pediatricos",
       description: "The primary meaning of Doctor in English has historically been with reference to the holder of a doctoral degree." 
    },
    {
       id: 5,
       title: "Autoimune e inflamacao",
       description: "The primary meaning of Doctor in English has historically been with reference to the holder of a doctoral degree." 
    },
    {
       id: 6,
       title: "Saude do Coracao",
       description: "The primary meaning of Doctor in English has historically been with reference to the holder of a doctoral degree." 
    }
]

// generate service card

function generateServiceHtml (ser) {
    return `
    <div class="bg-white shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer
    rounded-lg overflow-hidden">
    <div class="p-6 text-left">
    <p class="text-blue-600 border w-7 text-center rounded-full bg-gray-200">✓</p>
    <h3 class="text-2xl font-semibold my-4">${ser.title}</h3>
    <p class="text-gray-700 mb-4">${ser.description}</p>
    </div>
    </div>
    `
}

const ServiceContainer = document.getElementById("service-container");

ServiceContainer.innerHTML = services.map((ser) => generateServiceHtml(ser)).join('')