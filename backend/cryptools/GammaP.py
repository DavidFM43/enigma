
import plotly.graph_objects as go
from string import ascii_lowercase

TYPE = ["Type I", "Type II", "Type III"]
COLORS = ["red", "green", "blue"]

def trajectory(points:list[list], t:int, fig:go.Figure, classes:list) -> list[list]:
    '''
    Inserts trajectories of type t starting at every point in the list points into the figure fig
    '''
    newPoints = list() #List of points of type t
    for p in points: #Every new trajectory of type t starts at point p
        x = [p[0]]
        y = [p[1]]
        s = [p[2]] #max slope in the trajectories that cross the point (x, y)
        slope = 0
        '''
        Checks if it is possible to draw a new line in the current trajectory
        If the trajectory is of type 2 (III), the slope of every new line
        must be lesser or equal than the slope of the previous lines
        The coordinate y always must be lesser than 20
        '''
        while((t != 2 or slope <= s[-1]) and x[-1] < 9 and y[-1] + slope < 20):
            x.append(x[-1] + 1)
            y.append(y[-1] + slope)
            s.append(max([slope, s[-1]]))
            newPoints.append([x[-1], y[-1], s[-1]])
            #Adds a unit into the correspondent class
            if(x[-1] + y[-1] >= 0 and x[-1] + y[-1] <= 28):
                classes[x[-1] + y[-1]] += 1
            slope += 1
        fig.add_trace(
            go.Scatter(
                x = x,
                y = y,
                name = TYPE[t], 
                legendgroup = TYPE[t],
                marker = dict(color=COLORS[t]),
                text = s,
                showlegend=False,
            )
        )
    return newPoints
    
def graphGenerator(x_0:int, y_0:int, fig:go.Figure) -> list[int]:
    '''
    Returns the graph of the trajectories of type I, II and III
    and a list where the i-th position stores the number of trajectories
    that cross the points of the class 'i' (points such as the sum of its
    coordinates (x,y) is 'i'. x+y=i)
    '''
    classes = [0 for i in range(29)]
    t1 = trajectory([[x_0, y_0, 0]], 0, fig, classes) #Trajectory Type I
    t2 = trajectory(t1, 1, fig, classes) #Trajectories Type II
    trajectory(t2, 2, fig, classes) #Trajectories Type III
    return classes

def graphing(x_0:int, y_0:int, permutation:str) -> tuple[go.Figure, list[list]]:
    '''
    Returns the figure and the matrix of permuted alphabets
    '''
    fig = go.Figure()
    p = [ord(i)-48 for i in permutation]
    fig.update_yaxes(autotypenumbers="strict")

    #matrix with 10 columns of alphabets with a shift
    alphabets = [[chr(((i+j) % 26) + 97) for i in range(20)] for j in range(10)]
    #permutation of the columns of the previous matrix
    k = [alphabets[p[i]] for i in range(10)]
    #number of trajectories thar cross points of each class
    classes: list[int] = graphGenerator(x_0, y_0, fig)
    #adds the number of trajectories to every position in the matrix
    for i in range(10):
        for j in range(20):
            k[i][j] = chr((ord(k[i][j]) - 97 + classes[i+j]) % 26 + 97)
    #draws a column at every iteration
    for c in range(10):
        fig.add_trace(
            go.Scatter(
                x = [c]*20,
                y = list(range(20)),
                mode = "markers+text",
                text = k[c],
                textposition = "middle center",
                marker = dict(color='white'),
                showlegend = False,
            )
        )
    return fig, k


def encrypt_gammaP(plain_text:str, matrix:list[list[int]]) -> list[tuple[int,int]]:
    """
    Cipher text in coordinates of the coding in the plane
    """
    encrypt = list()
    plain_text = plain_text.replace(" ", "").lower() #remove spaces
    percentage, initial = 0, 0
    
    for i in plain_text: 
        for j in range(len(matrix)): #(j+initial) %len(matrix) = column
            if i in matrix[(j+initial) %len(matrix)]:
                encrypt.append( ((j+initial)%len(matrix) ,matrix[(j+initial) %len(matrix)].index(i)) ) #(column, row)
                percentage +=1 # ciphertext percentage
                break
        initial +=1
    return encrypt ,(percentage*100)/len(plain_text)

def decrypt_gammaP(cipher_text:list[tuple[int]], matrix:list[list[int]]) -> str:
    """
    Plaintext encrypted in plane coordinates
    """
    decrypt:str = ""
    for i in cipher_text:
        decrypt += matrix[i[0]][i[1]]
    return decrypt

if __name__ == "__main__":
    fig, matrix = graphing(0, 0, '0235814697')
    #fig.show()
    #print(matrix)

    #test encrypt
    print(encrypt_gammaP("abcd", matrix))
    #print(encrypt_gammaP("Inceptos neque.", matrix))

    #test decrypt
    print(decrypt_gammaP([(0, 0), (4, 13), (2, 17), (3, 16)], matrix))
    print(decrypt_gammaP([(0, 6), (1, 6), (2, 17), (3, 19), (5, 10), (5, 12), (7, 3), (7, 8), (8, 1), (1, 1), (1, 9), (1, 14), (2, 0)], matrix))
    

