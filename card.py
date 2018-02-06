class Card:
	def __init__ (self, suit, rank):
		self.suit=suit
		self.rank=rank

	def getRank(self):
		return self.rank

	def __str__(self):
		return "-"*7+'\n'+self.rank+self.suit+'\n\n'+' '*4+self.suit+self.rank+'\n'+"-"*7

	"""def printCard(self):
		print("Suit:",self.suit."\n","Rank:",self.rank)"""

	def __lt__(self, target):
		return ranks.index(self.rank) < ranks.index(target.rank)

	def __gt__ (self, target):
		return ranks.index(self.rank) > ranks.index(target.rank)
