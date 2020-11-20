import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/inventory", methods=["GET", "POST"])
def register_material():
    inventory = mongo.db.inventory.find()
    if request.method == "POST":
        matid = mongo.db.inventory.count()+1
        rgstmat = {
            "material_id": "%04d" % (matid,),
            "material_description": request.form.get("material_description"),
            "material_unit": request.form.get("material_unit"),
            "material_cost": request.form.get("material_cost")
        }
        mongo.db.inventory.insert_one(rgstmat)
        flash("New Material registered")
        return redirect(url_for("register_material"))
    return render_template("inventory.html", inventory=inventory)


@app.route("/inventory/<material_id>")
def delete_material(material_id):
    mongo.db.inventory.remove(
        {"_id": ObjectId(material_id)})
    return redirect(url_for("register_material"))


@app.route("/purchases")
def purchases():
    puorders = mongo.db.puorders.find()
    inventory = mongo.db.inventory.find()
    return render_template(
        "purchases.html",
        puorders=puorders, inventory=inventory)

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
        port=int(os.environ.get("PORT")),
        debug=True)
