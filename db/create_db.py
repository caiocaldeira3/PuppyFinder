import sqlite3

conn = sqlite3.connect('puppyFinder.db')  
c = conn.cursor()

# Create table
c.execute('''CREATE TABLE IF NOT EXISTS pessoa (
              id integer PRIMARY KEY,
              nome text,
              telefone text,
              email text,
              foto text,
              senha_hash text)''') #FOTO

c.execute('''CREATE TABLE IF NOT EXISTS organizacao (
              id integer PRIMARY KEY,
              nome text,
              telefone text,
              email text,
              website text,
              tt text,
              fb text,
              ig text,
              descricao text,
              representante text,
              doacoes text,
              foto text,
              senha_hash text)''') #FOTO

c.execute('''CREATE TABLE IF NOT EXISTS animal (
              id integer PRIMARY KEY,
              id_org integer NOT NULL,
              nome text,
              idade integer,
              sexo text,
              pelagem text,
              porte text,
              cadastrado text,
              vermifugado text,
              descricao text,
              representante text,
              doacoes text,
              foto text,
              FOREIGN KEY (id_org) REFERENCES organizacao (id))''') # FOTO

c.execute('''CREATE TABLE IF NOT EXISTS interesse (
              id_pessoa integer NOT NULL,
              id_animal integer NOT NULL,
              dt_cadastro text,
              dt_conclusao text,
              status text,
              FOREIGN KEY (id_pessoa) REFERENCES pessoa (id),
              FOREIGN KEY (id_animal) REFERENCES animal (id),
              PRIMARY KEY (id_pessoa, id_animal))''') # FOTO


conn.commit()