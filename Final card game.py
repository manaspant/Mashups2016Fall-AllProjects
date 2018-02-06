import random

#Creating card Card object

class Card:
	def __init__ (self,r,s,v):
		self.r=r
		self.s=s
		self.v=v

	def __str__ (self):
		return "*------*\n|{0}{1}    |\n|      |\n|    {0}{1}|\n*------*".format(self.r,self.s)

	def __lt__ (self,target):
		return self.v < target.v

	def __gt__ (self,target):
		return self.v > target.v

	def __eq__ (self,target):
		return self.v == target.v


class Deck:
	def __init__ (self):
		self.ranks=list(range(2,11))+['J','Q','K','A']
		self.suits=['C','H','D','S']
		self.values=list(range(2,15))
		self.cards=[]

	def createFullDeck(self):
		for s in self.suits:
			for r in self.ranks:
				self.cards.append(Card(r,s, self.values[self.ranks.index(r)]))
		random.shuffle(self.cards)

	def __str__ (self):
		tmp = ''
		for c in self.cards:
			tmp+=str(c)+'\n'
		# tmp+='-'*20+'\n'
		return tmp

	def deal (self):
		return self.cards.pop(0)


class War:
	def __init__ (self):
		self.dealer = Deck()
		self.dealer.createFullDeck()

		self.players=[Deck(),Deck()]
		self.turn = 0

		for i in range(len(self.dealer.cards)):
			self.players[self.turn].cards.append(self.dealer.deal())
			self.turn = (self.turn+1)%2

	def play(self):
		while len(self.players[0].cards)> 0 and len(self.players[1].cards)> 0 :
			c1 = self.players[0].deal()
			c2 = self.players[1].deal()


			print (c1,c2, sep = '\n')

			if c1 > c2:
				print ("player 1 won this round")
				self.players[0].cards.append(c1)
				self.players[0].cards.append(c2)

			elif c1 < c2:
				print ("player 2 won this round")
				self.players[1].cards.append(c1)
				self.players[1].cards.append(c2)

			else:#in case of a tie
				print ("Its war time")
				tmpList=[]

				while c1 == c2:
					tmpList.append(c1)
					tmpList.append(c2)
	
					for i in range(3):
						if len(self.players[0].cards)== 0 or len(self.players[1].cards) == 0:
							return True

						tmpList.append(self.players[0].deal())
						tmpList.append(self.players[1].deal())

					if len(self.players[0].cards)== 0 or len(self.players[1].cards) == 0:
						return True
					
					c1 = self.players[0].deal()
					c2 = self.players[1].deal()

					print (c1,c2, sep = '\n')
				
				if c1 > c2:
					print ("player 1 won this round")
					for c in tmpList:
						self.players[1].cards.append(c)

				elif c1 < c2:
					print ("player 2 won this round")
					for c in tmpList:
						self.players[0].cards.append(c)

			#input()


war = War()
war.play()
if len(war.players[0].cards) == 0:
	print ("player 2 won")
else:
	print ("Player 1 won")






# war.py
# Open with
# Displaying war.py.