import card
import random

class Deck:
	
	def __init__(self):
		self.deck = []
		suits=["S","H","D","C"]
		ranks=['2','3','4','5','6','7','8','9','10','J','Q','K','A']

		self.suits=suits
		self.ranks=ranks

		self.createDeck()
		self.shuffleDeck()

	def createDeck(self):
		for x in range(len(self.suits)-1):
			for y in range(len(self.ranks)-1):
				self.deck.append(card.Card(self.suits[x],self.ranks[y]))

	def shuffleDeck(self):
		random.shuffle(self.deck)

	def __str__(self):
		tmpList=[]
		for card in self.deck:
			tmpList.append(str(card).split('\n'))
		tmp = ""
		for i in range(len(tmpList[0])-1):
			for c in tmpList:
				if self.namePlayer== "house" and i == 0:
					tmp += "*"*7+" "
				else:
					self.namePlayer != "house"
					tmp+=c[i]+' '
			tmp+='\n'
			return tmp

	def printDeck(self):
		for x in range(len(self.deck)-1):
			self.deck[x].printCard

	def deal(self, hand, numCards):
		for g in range(numCards):
			hand.add(self.deck.pop())

	def remove(self, card):
		self.board.remove(card)


class Hand(Deck):

	def __init__(self, namePlayer):
		Deck.__init__(self)
		self.deck=[]
		self.namePlayer=namePlayer

	def add(self, card):
		self.deck.append(card)


	def getSum(self):
		sum=0
		ace=0
		for g in range(len(self.deck)-1):
			if self.deck[g].rank == 'J' or self.deck[g].rank == 'Q' or self.deck[g].rank == 'K':
				sum+=10
			elif  self.deck[g].rank == 'A':
				sum+=11
				ace+=1
			else:
				sum+=int(self.deck[g].rank)

		while sum > 21 and ace > 0:
			total -= 10
			ace -= 1

		return sum



class BlackJack:
	def __init__(self):
		self.deck=Deck()
		self.players = []
		self.players.append(Hand("house"))
		self.players.append(Hand("player1"))
		self.turn = 1
		#for p in self.players:
		self.deck.deal(self.players[0], 2)
		print(self.players[1].namePlayer, "\n", self.players[1])

		self.play

	def processChoice(self, choice):
		if choice == 'hit':
			self.deck.deal(players[turn],1)

			if self.players[turn].getSum() > 21:
				print ("You lost, hand bigger than 21")
				print (self.players[self.turn])
				return True
			else:
				print (self.players[self.turn])
				return False
		else:
			while self.players[0].getSum() <17:
				self.deck.deal(self.players[0],1)
				if self.players[0].getSum() > 21:
					print ("You Won")
					self.players[0].namePlayer='h'
					print(self.players[0])
					return True

			if self.players[0].getSum() > self.players[self.turn].getSum:
				print ("You lost")
			elif self.players[0].getSum() < self.players[self.turn].getSum:
				print ("You won")
			else:
				print ("It's a tie")

			print(self.players[self.turn])
			self.players[0].namePlaye='h'
			print(self.players[self.turn])

	def play(self):
		win=False
		while win == False:
			userChoic = input ("Please enter  hit or stand ")
			if userChoice in ['hit', 'stand']:
				win = self.processChoice(userChoice)


bj = BlackJack()

"""
----WAR GAME----
card1 = d.deal()
card2 = d.deal()

print(card1)
print(card2)

if card1>card2:
	print("Player 1 won")
elif card1 < card2:
	print("Player 2 won")
else:
	print("Its a tie")
----------------	
"""