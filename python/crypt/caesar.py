#!/usr/bin/env python3
class caesar:
  def __init__(self, rotation, flagDigits):
    if isinstance(rotation, int):
      if isinstance(flagDigits, bool):
        self.plainUpper = [chr(i) for i in range(ord('A'), ord('Z') + 1)]
        self.plainLower = self.plainUpper[:]
        for value in self.plainLower:
          self.plainLower[self.plainLower.index(value)] = value.lower()
        self.digits = [chr(i) for i in range(ord('0'), ord('9') + 1)]
        self.plainText = self.plainUpper[:]
        self.plainText += self.plainLower[:]
        self.cipherUpper = self.rotate(self.plainUpper, rotation)
        self.cipherLower = self.rotate(self.plainLower, rotation)
        self.cipherTable = self.cipherUpper[:]
        self.cipherTable += self.cipherLower[:]
        if flagDigits is True:
          self.plainText += self.digits[:]
          self.cipherDigits = self.rotate(self.digits, rotation)
          self.cipherTable += self.cipherDigits[:]
      else:
        raise TypeError("flag must be boolean!")
    else:
      raise TypeError("rotation must be an integer!")
  
  def rotate(self, charset, offset):
    while offset < 0:
      offset += len(charset)
    offset = offset % len(charset)
    translation = charset[offset:] + charset[:offset]
    return translation
  
  def encrypt(self, text):
    if isinstance(text, str):
      cipher = []
      textList = list(text)
      for character in textList:   
        if character in self.plainText:
          newCharacter = self.cipherTable[self.plainText.index(character)]
        else:
          newCharacter = character
        cipher.append(newCharacter)
        output = ''.join(cipher)
      return output
    else:
      raise TypeError("input must be a string!")
  
  def decrypt(self, text):
    decipher = self.caesar(text, rotation * -1, flagDigits)
    return decipher
