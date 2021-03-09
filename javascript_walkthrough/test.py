def a():
    b()
    print('inside a')

a()

def b():
    c()
    print('inside b')

def c():
    print('inside c')