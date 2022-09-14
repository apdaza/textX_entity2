#!/usr/bin/env python
# -*- coding: utf-8 -*-


from os import mkdir
from os.path import exists, dirname, join
import jinja2
#from entity_test import get_entity_mm


def main(debug=False):

    this_folder = dirname(__file__)

    # Create output folder
    srcgen_folder = join(this_folder, 'certificados_generados')
    if not exists(srcgen_folder):
        mkdir(srcgen_folder)

    # Initialize template engine.
    jinja_env = jinja2.Environment(
        loader=jinja2.FileSystemLoader(this_folder),
        trim_blocks=True,
        lstrip_blocks=True)

    # Load template
    template = jinja_env.get_template('certificado.template')

    lista_certificados = [x.split(",") for x in open("certificados.txt").readlines()]

    for entity in lista_certificados:
        # For each entity generate java file
        with open(join(srcgen_folder,
                       "%s.html" % entity[0].capitalize()), 'w') as f:
            f.write(template.render(entity=entity))

if __name__ == "__main__":
    main()
