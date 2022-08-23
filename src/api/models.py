from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Carteras(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(120), nullable = False)
    precio = db.Column(db.Integer, nullable = False)
    caracteristicas = db.Column(db.String(120), nullable = False)
    foto = db.Column(db.String(200), nullable = False)

    def __repr__(self):
        return f'<Cartera {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "precio": self.precio,
            "caracteristicas": self.caracteristicas,
            "foto": self.foto
        }