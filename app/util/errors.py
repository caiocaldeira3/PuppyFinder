from flask import Response

ServerError = Response(
    response={"error": "Houve um problema conectando com o servidor da API"},
    status=500,
    mimetype="application/json"
)
NotFoundError = Response(
    response={"error": "Não foi possível encontrar a página que você estava procurando"},
    status=404,
    mimetype="application/json"
)
AuthorizationError = Response(
    response={"error": "Você não tem acesso à essa página"},
    status=403,
    mimetype="application/json"
)
