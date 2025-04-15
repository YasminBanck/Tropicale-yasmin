document.addEventListener('DOMContentLoaded', function () {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

});
<div id="acessibilidade" class="menu-acessibilidade">
    <button id="botao-acessibilidade" class="btn btn-primary fw-bold rotacao-botao">Acessibilidade</button>

    <div id="opcoes-acessibilidade" class="opcoes-acessibilidade apresenta-lista">
        <button id="aumentar-fonte" class="btn btn-primary fw-bold">A+</button>
        <button id="diminuir-fonte" class="btn btn-primary fw-bold">A-</button>
    </div>
</div>
