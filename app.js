const change = ()=>{
    let r = document.getElementById('r')
    let g = document.getElementById('g')
    let b = document.getElementById('b')
    let result = document.getElementById('result')
    classResult = ['text-center', "py-4"]
    result.classList.add(...classResult)
    result.innerHTML = `RGB(${r.value}, ${g.value}, ${b.value})`
    document.getElementById('color').style.background = rgbToHex(+r.value, +g.value, +b.value)
}

const rgbToHex = (r, g, b)=>{
    return '#'+[r,g,b].map(x=>x.toString(16)).join('')
}

const copy = ()=>{
    navigator.clipboard.writeText(`RGB(${r.value}, ${g.value}, ${b.value})`)
    .then(()=>{
        alert('Color copiado en el portapapeles')
    })
    .catch(err=>{
        console.log('Error al copiar el texto', err);
        alert('No se pudo copiar el error')
    })
}