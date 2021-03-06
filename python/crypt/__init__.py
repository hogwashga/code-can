#!/usr/bin/env python3

import uuid
from . import caesar
#from . import frequency

__all__ = ["caesar", "frequency"]

caesar.dict = {}
frequency.dict = {}

  def __generateID(type):
    check = True
    while check == True
      id = uuid.uuid4()
      check = id in type.dict
    return id;
  
  def createObject(type):
    name = __generateID(type)
    return type(name);
